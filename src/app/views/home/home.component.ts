import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('dialog') dialog: ElementRef<HTMLDialogElement> | null = null;
  videoEnded: boolean = false;
  funPrank(evt: Event) {
    evt.preventDefault();
    setTimeout(() => {
      this.dialog?.nativeElement.showModal();
      const video = this.dialog?.nativeElement.querySelector('video');
      if (video) {
        video.currentTime = 0.0;
        video.muted = false;
        video.play().catch((err)=>{
          console.clear();
          console.log(err);
          this.dialog?.nativeElement.close();

        });
        video.addEventListener('ended', () => {
          video.pause()
          this.videoEnded = true;
        });
        // document.removeChild()
      }
    }, 5000);
    //Todo: Link it to Never Gonna give you up with a timeout
  }
  ngAfterViewInit(): void {
    // console.log(this.dialog?.nativeElement.showModal());
  }
  closeModal() {
    this.videoEnded = false;
    this.dialog?.nativeElement.close();
  }
}
