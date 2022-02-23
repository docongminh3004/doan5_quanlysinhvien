import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { LophocService } from 'src/app/services/lophoc.service';

@Component({
  selector: 'app-lophoc',
  templateUrl: './lophoc.component.html',
  styleUrls: ['./lophoc.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class LophocComponent implements OnInit {

  constructor(private lophocService: LophocService,
    private router: Router,
   private readonly messageService: MessageService,
   private confirmationService: ConfirmationService,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder) { }
  lophocs: any = [];
  ds:any[]=[];
  tenlop: any;
  siso: any;
  gvcn: any;

  khoa: any;
  malop: any;

  //phân trang
  page: any = 1;
  totalLength: any;
  //
  searchText: any;
  //
  formEdit !: FormGroup;
  formAdd !: FormGroup;
  id_Edit = 0;
  //
  ngOnInit(): void {
   
    this.DsLop();
    this.formAdd = this.fb.group({
      malop: this.fb.control('', [Validators.required]),
      tenlop: this.fb.control('', [Validators.required]),
      siso: this.fb.control('', [Validators.required]),
      gvcn: this.fb.control('', [Validators.required]),
      khoa: this.fb.control('', [Validators.required]),
    });
    this.formEdit = this.fb.group({
      malop: this.fb.control('', [Validators.required]),
      tenlop: this.fb.control('', [Validators.required]),
      siso: this.fb.control('', [Validators.required]),
      gvcn: this.fb.control('', [Validators.required]),
      khoa: this.fb.control('', [Validators.required]),
    });

  }

  DsLop() {
  //  this.spinner.show();
    this.lophocService.getAll().subscribe(data => {
      this.lophocs = data;
      this.totalLength = data.length;
      console.log(this.lophocs);
      this.ds=data;
      this.spinner.hide();
    });
  }
  add() {
 
    this.lophocService.add(this.formAdd.value).subscribe((data: any) => {
       //alert(data.toString());
      this.messageService.add({ severity: 'success', summary: 'Thông báo', detail: 'Đã thêm thành công' });
      setTimeout(() => {
        this.router.navigateByUrl('/admin/lophoc');
      }, 1000);
      location.reload();
    })

  }
  onEdit(mahp: any): void {
  
    this.lophocService
      .getByid(mahp)

      .subscribe({
        next: (loai) => {
          this.id_Edit=loai.malop;
          console.log(loai);
          this.formEdit = this.fb.group({
            malop: this.fb.control(loai.malop, [Validators.required]),
            tenlop: this.fb.control(loai.tenlop, [Validators.required]),
            siso: this.fb.control(loai.siso, [Validators.required]),
            gvcn: this.fb.control(loai.gvcn, [Validators.required]),
            khoa: this.fb.control(loai.khoa, [Validators.required]),
          });
       
       
        },
      });
  }
  update(){
    if(this.id_Edit>0){
      this.lophocService.update(this.id_Edit,this.formEdit.value).subscribe((data: any) => {
        alert(data.toString());
        location.reload();
         setTimeout(() => {
          this.router.navigateByUrl('/admin/lophoc');
        }, 1000);
      })
    }
  }
  closeClick() {
    setTimeout(() => {
      this.router.navigateByUrl('/admin/lophoc');
    }, 1000);
    //this.clear();
  }
  deleteClick(item: any) {
    this.confirmationService.confirm({
      message: 'Bạn có muốn xóa lớp học này ?',
      accept: () => {
        this.lophocService.delete(item.malop).subscribe(data => {
          this.messageService.add({ severity: 'success', summary: 'Thông báo', detail: 'Đã xóa thành công.' });
          this.DsLop();
        });

      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Thông báo ', detail: 'Bạn đã chọn không ! ' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Thông báo ', detail: 'Bạn đã chọn Thoát !' });
            break;
        }
      }
    });

  }


}

