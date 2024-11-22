import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnergyHeader, EnergySidebar } from '@osinergmin/shared/ui';

@Component({
  selector: 'energy-console-layout',
  standalone: true,
  imports: [EnergyHeader, EnergySidebar, RouterOutlet],
  templateUrl: './console.component.html'
})
export class EnergyConsoleLayout {

}
