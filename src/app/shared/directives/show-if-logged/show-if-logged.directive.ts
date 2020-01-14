import { Directive, ElementRef, Renderer, OnInit } from "@angular/core";
import { UserService } from "src/app/core/user/user.service";

@Directive({
  selector: "[showIfLogged]"
})
export class ShowIfLoggedDirective implements OnInit {
  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.renderer.setElementStyle(
        this.element.nativeElement,
        "display",
        user ? "block" : "none"
      );
    });
  }
}
