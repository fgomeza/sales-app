import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms'
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.form.controls };

  onSubmit() {
    console.log("onSubmit");
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    //this.loginService.login(this.f.username.value, this.f.password.value).pipe(first()).subscribe

    //const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //this.router.navigateByUrl('');

    this.router.navigate(['users']);
    
  }

}
