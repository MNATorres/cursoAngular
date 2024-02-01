import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome = 'Hola!';
  tasks = signal( [
    'Instalar el Angular CLI',
    'Creart Proyecto',
    'Crear Componentes',
    'Crear servicio',
  ]);
  name = signal('Matias');
  age = 29;
  disabled = true;
  img =
    'https://www.lavoz.com.ar/resizer/zU6FRuN30kNbMi1SWMTpuJ0pMLg=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/GI4DEODEGNSTAMJYGZRWKN3FGQ.jpg';

  person = signal({
    name: 'Nehuen',
    age: 29,
    avatar: 'https://avatars.githubusercontent.com/u/96670695?v=4',
  });

  clickHandler() {
    alert('Me estan haciendo click');
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue)
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

  changeAge(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
     return {
      ...prevState,
      age: parseInt(newValue, 10)
     } 
    })
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
     return {
      ...prevState,
      name: newValue
     } 
    })
  }
}
