import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { VmessageModule } from "../shared/components/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [SigninComponent],
  imports: [CommonModule, ReactiveFormsModule, VmessageModule, RouterModule]
})
export class HomeModule {}
