import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-attachement',
  templateUrl: './attachement.component.html',
  styleUrls: ['./attachement.component.scss']
})
export class AttachementComponent implements OnInit {

  @Input('') appNo: number;
  
  modal: FormGroup;
  modalTitle: string;
  modalMessage: string;
  deleteAttachmentIndex: number;

  attachments: any = [];
  data = [
    {
      id: 1,
      commentBy: 'abc',
      commentDate: '2019-09-01',
      comment: 'aknsnsnaksjndndnkasjkjkfafsds'

    },
    {
      id: 2,
      commentBy: 'abc',
      commentDate: '2019-09-01',
      comment: 'aknsnsnaksjndndnkasjkjkfafsds'

    }
  ]

  constructor() { }

  ngOnInit() {
    console.log("On init attachment ",this.appNo);
  }

  addAttachment() {
    this.attachments.push({
      docTitle: '',
      fileName: ''
    });
  }

  deleteAttachment(deletAttachmentModal, infoModal, index?) {
    if (index || index == 0) {
      this.modalTitle = "Confirmation Message";
      this.modalMessage = "Are you sure you want to delete this attachment?"
      this.deleteAttachmentIndex = index;
      deletAttachmentModal.show();
    }
    else {
      deletAttachmentModal.hide();
      this.attachments.splice(this.deleteAttachmentIndex, 1)
    }
  }

  changeFileSelection(e, infoModal, index) {
    if (e.target.files.length < 1)
      return false;

    var file = e.target.files[0];
    let ext = file.name.substring(file.name.lastIndexOf('.') + 1);
    if (file.type == 'image/png' || file.type == 'image/jpeg' || file.type == 'image/jpg' || file.type == 'image/bmp' || file.type == 'image/gif') {
      if (file.size < 1000000) {

        this.attachments[index].file = file;
        // this.getBase64(file)
        // 	.then(function (result) {
        // 		file = result
        // 		console.log(file);
        // 		this.uploadFile(file);
        // 	})
        // 	.catch(function (error) {
        // 		console.log(error.message);
        // 	});

      }
      else {
        this.modalTitle = "Error Message";
        this.modalMessage = "File size can not be greater than 1 MB";
        infoModal.show();
      }
    }

    else {
      this.modalTitle = "Error Message";
      this.modalMessage = "Selected file format is not supported. Please select a file in archived format"
      infoModal.show();
    }
  }

  uploadFile(file) {
    let payload = {
      "file": file
    }
    // this._pixUploadService.Add("",payload).subscribe((ReturnData: any) => {
    // 		console.log(ReturnData);
    // this.modalTitle = "Success Message";
    // this.modalMessage = "File has been Successfully uploaded";
    // infoModal.show();
  }

  checkDocTyoe(index){
    if (this.attachments[index].docTitle == null || this.attachments[index].docTitle == ""){
      this.attachments[index].file = null;
    }
  }

}
