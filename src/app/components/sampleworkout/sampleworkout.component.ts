import { NonNullAssert } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, input, output } from '@angular/core';

@Component({
  selector: 'app-sampleworkout',
  templateUrl: './sampleworkout.component.html',
  styleUrl: './sampleworkout.component.css'
})
export class SampleworkoutComponent implements OnInit{
  @Input() studentlist: any;
  @Output() numberGenerated1 = new EventEmitter<number>();
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
books = null;
  books1 =[
    {'bookid':100,   'bookname':'newbook1',        'bookstatus': 'available',},
    {'bookid':200,   'bookname':'newbook200',     'bookstatus': 'Notavailable',},
    {'bookid':300,   'bookname':'newbook300',      'bookstatus': 'available',},
    {'bookid':400,   'bookname':'newbook400',      'bookstatus': 'Notavailable',}
  ]

  generateNumber() {
    const randomNum = Math.floor(Math.random() * 100); // Generating a random number
    this.numberGenerated1.emit(randomNum); // Emitting the number
  }

}
