import { Component } from '@angular/core';
import { ColorPicker } from 'primeng/colorpicker';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [ColorPicker, CommonModule, FormsModule],
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.css'
})
export class ColorPickerComponent {
  selectedColorHex: string = '#FFFFFF';
  selectedColorRGB: string = '255,255,255';
  selectedColorHSL: string = '58,0%,100%';
  selectedColorRGBString: string = '';
  selectedColorHSLString: string = '';
  colors: any[] = []
  divs: any = new Array(10);
  color: any;
  r: any;
  g: any;
  b: any;
  divcount: any;

  ngOnInit() {
    this.divFor();

  }

  divFor() {
    this.divcount = 0;

    while (this.divcount < 20) {
      // Asignar el color base de cada color de la tabla de colores
      switch (this.divcount) {
        case 0:
          this.r = 249; this.g = 235; this.b = 234; break;
        case 1:
          this.r = 253; this.g = 237; this.b = 236; break;
        case 2:
          this.r = 245; this.g = 238; this.b = 248; break;
        case 3:
          this.r = 244; this.g = 236; this.b = 247; break;
        case 4:
          this.r = 234; this.g = 242; this.b = 248; break;
        case 5:
          this.r = 235; this.g = 245; this.b = 251; break;
        case 6:
          this.r = 232; this.g = 248; this.b = 245; break;
        case 7:
          this.r = 232; this.g = 246; this.b = 243; break;
        case 8:
          this.r = 233; this.g = 247; this.b = 239; break;
        case 9:
          this.r = 234; this.g = 250; this.b = 241; break;
        case 10:
          this.r = 254; this.g = 249; this.b = 231; break;
        case 11:
          this.r = 254; this.g = 245; this.b = 231; break;
        case 12:
          this.r = 253; this.g = 242; this.b = 233; break;
        case 13:
          this.r = 251; this.g = 238; this.b = 230; break;
        case 14:
          this.r = 253; this.g = 254; this.b = 254; break;
        case 15:
          this.r = 248; this.g = 249; this.b = 249; break;
        case 16:
          this.r = 244; this.g = 246; this.b = 246; break;
        case 17:
          this.r = 242; this.g = 244; this.b = 244; break;
        case 18:
          this.r = 235; this.g = 237; this.b = 239; break;
        case 19:
          this.r = 234; this.g = 236; this.b = 238; break;
        default:
          this.r = 0; this.g = 0; this.b = 0; break;
      }

      // Oscurecer colores desde el color base
      for (let index = 0; index < 10; index++) {
        this.colors.push(this.rgbToHex(this.r, this.g, this.b)); // Guardar el color actual
        this.reduceBrightness(this.r, this.g, this.b); // Oscurecerlo
      }

      this.divcount++; // Incrementar para el siguiente caso del switch
    }
  }

  reduceBrightness(r: number, g: number, b: number) {
    
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    let l = (max + min) / 2; 
    let h = 0; 
    let s = 0;

    if (delta !== 0) {
      s = delta / (1 - Math.abs(2 * l - 1));
      if (max === r) {
        h = ((g - b) / delta) % 6;
      } else if (max === g) {
        h = (b - r) / delta + 2;
      } else {
        h = (r - g) / delta + 4;
      }
      h *= 60;
      if (h < 0) h += 360;
    }

    // Reducimos luminancia sin alterar el tono ni la saturación
    l = Math.max(0, l * 0.9); // Reducir al 90% o el valor deseado

    // Logs de depuración
    // console.log("Delta:", delta, "Max:", max, "Min:", min);
    // console.log("h:", h, "s:", s, "l:", l);

    // Función para convertir HSL -> RGB
    const hueToRgb = (p: number, q: number, t: number): number => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    // Convertimos de HSL a RGB
    let rFinal, gFinal, bFinal;
    if (s === 0) {
      // Gris (sin saturación)
      rFinal = gFinal = bFinal = l * 255;
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      rFinal = hueToRgb(p, q, h / 360 + 1 / 3) * 255;
      gFinal = hueToRgb(p, q, h / 360) * 255;
      bFinal = hueToRgb(p, q, h / 360 - 1 / 3) * 255;
    }

    // Redondeamos y asignamos
    this.r = Math.round(rFinal);
    this.g = Math.round(gFinal);
    this.b = Math.round(bFinal);

    // Log final de depuración
    //console.log("Final RGB: r:", this.r, "g:", this.g, "b:", this.b);
  }

  /**
   * pasar de rgb a hsl cambiar la luminosidad volver a ponerlo en rgb para que siga apartir de ahi
   */
  componentToHex(c: any) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  // Pasar de RGB a Hexadecimal
  rgbToHex(r: any, g: any, b: any) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

  //Cambiar los valores del  al hacer click
  onColorClick(hex: string): void {
    // Actualizar el color seleccionado en hexadecimal
    this.selectedColorHex = hex;

    // Convertir a RGB y actualizar
    const rgb = this.hexToRgb(hex);
    this.selectedColorRGB = `${rgb.r},${rgb.g},${rgb.b}`;

    // Convertir a HSL y actualizar
    const hsl = this.hexToHsl(hex);
    this.selectedColorHSL = `${hsl.h},${hsl.s}%,${hsl.l}%`;
  }

  // Función para convertir de hexadecimal a RGB
  hexToRgb(hex: string): { r: number, g: number, b: number } {
    // Validar formato hexadecimal
    const validHex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    if (!validHex.test(hex)) {
      throw new Error("Formato hexadecimal inválido.");
    }

    // Eliminar el "#" si existe
    hex = hex.replace(/^#/, '');

    // Expandir formato de 3 caracteres a 6 caracteres
    if (hex.length === 3) {
      hex = hex.split('').map(char => char + char).join('');
    }

    // Extraer componentes RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return { r, g, b };
  }

  // Función para convertir de hexadecimal a HSL
  hexToHsl(hex: string): { h: number, s: number, l: number } {
    const { r, g, b } = this.hexToRgb(hex);

    // Convertir valores RGB de 0-255 a 0-1
    const rNorm = r / 255;
    const gNorm = g / 255;
    const bNorm = b / 255;

    const max = Math.max(rNorm, gNorm, bNorm);
    const min = Math.min(rNorm, gNorm, bNorm);
    const delta = max - min;

    // Cálculo de la luminosidad
    const l = (max + min) / 2;

    let h = 0;
    let s = 0;

    if (delta !== 0) {
      // Cálculo de la saturación
      s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

      // Cálculo del tono (hue)
      switch (max) {
        case rNorm:
          h = (gNorm - bNorm) / delta + (gNorm < bNorm ? 6 : 0);
          break;
        case gNorm:
          h = (bNorm - rNorm) / delta + 2;
          break;
        case bNorm:
          h = (rNorm - gNorm) / delta + 4;
          break;
      }
      h = Math.round(h * 60); // Convertir a grados
    }

    return { h, s: +(s * 100).toFixed(2), l: +(l * 100).toFixed(2) };
  }

  onColorChange() {
    // Actualizar RGB
    const rgb = this.hexToRgb(this.selectedColorHex);
    this.selectedColorRGB = `${rgb.r}, ${rgb.g}, ${rgb.b}`;

    // Actualizar HSL
    const hsl = this.hexToHsl(this.selectedColorHex);
    this.selectedColorHSL = `${hsl.h}, ${hsl.s}%, ${hsl.l}%`;
  }


}
