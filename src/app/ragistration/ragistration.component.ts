import { Component } from '@angular/core';
import{ NgForm } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { UserauthService } from '../userauth.service';

@Component({
  selector: 'app-ragistration',
  templateUrl: './ragistration.component.html',
  styleUrls: ['./ragistration.component.css']
})
export class RagistrationComponent {

  constructor(private userAuth:UserauthService) { }
  
  onSubmit(myform:NgForm){
   let url="enter url"
   let data:Object=myform.value
   this.userAuth.signUp(url,data).subscribe(
    (response: any) => {
      console.log('Post request successful', response);
      // Handle the response here
    },
    (error: any) => {
      console.error('Error making post request', error);
      // Handle the error here
    }
  );
  }

  googleSignUp(){
    console.log("google sign up here")
  }

}
