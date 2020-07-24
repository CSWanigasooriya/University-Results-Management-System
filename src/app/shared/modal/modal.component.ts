import { ModalService } from './../../services/modal.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  title: string;
  content: string;

  constructor(public modal: ModalService) { }

  ngOnInit(): void {
    this.modal.currentTitle.subscribe(title => this.title = title);
    this.modal.currentContent.subscribe(content => this.content = content);
  }

}
