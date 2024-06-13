import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';
import { Hello } from '../hello';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent implements OnInit{
  holap: string | null = null
  constructor(protected helloService: HelloService){}


  ngOnInit(): void {
    this.allo()
  }

  allo()
  {
    let self = this
    this.helloService.hello().subscribe({
      next(value: Hello) {
        self.holap = value.hola
      },
      error(err)
      {
        console.log(err)
      }
    })
  }
}
