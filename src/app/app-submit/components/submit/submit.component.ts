import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubmitService } from '../../services/submit.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {

  modalRef: any;
  file: File;
  formGroup: FormGroup;
  formData: FormData = new FormData();
  fileReader: FileReader = new FileReader();
  fileName: string;
  imageUrl: any;

  @ViewChild('fileinput') fileInput: ElementRef;

  constructor (private formBuilder: FormBuilder, private dashBoardService: SubmitService) { }

  ngOnInit(): void {
    this.formGroup = this.createForm();
  }

  createForm() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  async onUpload() {
    const file = this.fileInput.nativeElement;

    file.onchange = () => {
      this.setFileToUpload(file);
    };
    file.click();
  }

  setFileToUpload(file: any) {
    // if (!this.checkFileValidation(file)) {
    //   this.imageUrl = null;
    //   this.fileName = null;
    //   this.disableButton = true;
    //   return;
    // } else {
    //   this.errorMessage = null;
    // }
    this.file = file.files[0];

    this.formData.set('image', file.files[0]);
    this.fileReader.readAsDataURL(file.files[0]);

    this.fileReader.onload = () => {
      this.imageUrl = this.fileReader.result;
      this.fileName = this.file.name;
    };
    // if (this.file.size !== 0) {
    //   this.disableButton = false;
    // } else {
    //   this.disableButton = true;
    // }
  }

  onSubmit() {
    // console.log(this.formGroup.value);
    const result = Object.assign({}, this.formGroup.value);
    this.formData.set('name', result.name);
    this.formData.set('location', result.location);
    this.formData.set('description', result.description);
    console.log(this.formData);
    this.dashBoardService.submitCase(this.formData).subscribe(res => {
      console.log(res);
    });
  }

}
