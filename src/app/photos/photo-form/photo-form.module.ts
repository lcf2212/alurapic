import { NgModule } from "@angular/core";
import { PhotoFormComponent } from "./photo-form.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { VmessageModule } from "src/app/shared/components/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    FormsModule,
    RouterModule
  ]
})
export class PhotoFormModule {}
