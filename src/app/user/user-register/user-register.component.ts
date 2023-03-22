import { AlertifyService } from './../../services/alertify.service';
import { User } from './../../model/user';
import { UserServiceService } from './../../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerationForm: FormGroup
  user: User
  userSubmited : boolean
  constructor(private fb: FormBuilder, private userService : UserServiceService, private alertify : AlertifyService) { }

  ngOnInit() {
    // this.registerationForm = new FormGroup({
    //   userName: new FormControl('Mark', Validators.required),
    //   email : new FormControl(null,[Validators.required, Validators.email]),
    //   password : new FormControl(null,[Validators.required, Validators.minLength(8)]),
    //   confirmPassword : new FormControl(null,[Validators.required]),
    //   mobile: new FormControl(null,[Validators.required, Validators.maxLength(10)]),
    // })
    this.createRegistrationForm();
  }
  createRegistrationForm(){
    this.registerationForm = this.fb.group({
      userName: [null, Validators.required],
      email : [null,[Validators.required, Validators.email]],
      password : [null,[Validators.required]],
      confirmPassword : [null,[Validators.required]],
      mobile: [null,[Validators.required, Validators.maxLength(10)]],
    })
  }

  onSubmit(){
    console.log(this.registerationForm.value)
    this.userSubmited = true;
    console.log(this.registerationForm.valid)
    if(this.registerationForm.valid){
     // this.user =Object.assign(this.user, this.registerationForm.value)
      this.userService.addUser(this.userData())
      this.registerationForm.reset()
      this.userSubmited = false;
      this.alertify.success("congrats, you are successfully registered")
    }else{
      this.alertify.error("hahahaha")
    }


  }

  userData() : User{
    return this.user = {
      userName:this.userName.value,
      email:this.email.value,
      password:this.password.value,
      mobile:this.mobile.value
    }
  }
  // passwordMarchingValidator(fg: FormGroup): Validators{
  //   return fg.get('password').value === fg.get('cofirmPassword').value? null :
  //   {notmatched: true}
  // }

  get userName(){
    return this.registerationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registerationForm.get('email') as FormControl;
  }
  get password(){
    return this.registerationForm.get('password') as FormControl;
  }
  get mobile(){
    return this.registerationForm.get('mobile') as FormControl;
  }


}
