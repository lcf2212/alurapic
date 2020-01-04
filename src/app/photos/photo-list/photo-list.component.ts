import { Component, OnInit } from "@angular/core";
import { Photo } from "../photo/photo";
import { PhotoService } from "../photo/photo.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "ap-photo-list",
  templateUrl: "./photo-list.component.html",
  styleUrls: ["./photo-list.component.scss"]
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];

  constructor(
    private photoService: PhotoService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    const userName = this.activatedRouter.snapshot.params.userName;
    this.photoService
      .listFromUser(userName)
      .subscribe(photos => (this.photos = photos));
  }
}
