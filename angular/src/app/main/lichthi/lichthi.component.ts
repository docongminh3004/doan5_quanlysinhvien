import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { LichthiService } from 'src/app/services/lichthi.service';

@Component({
  selector: 'app-lichthi',
  templateUrl:'./lichthi.component.html' ,
  styleUrls: ['./lichthi.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class LichthiComponent implements OnInit {

  constructor(private lichthiService: LichthiService,
    private router: Router,
   private readonly messageService: MessageService,
   private confirmationService: ConfirmationService,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder) { }
  lichthis: any = [];
  hocphans: any = [];
  ds:any[]=[];
  mahp: any;

  

  //phân trang
  page: any = 1;
  totalLength: any;
  //
  searchText: any;
  //
  formEdit !: FormGroup;
  formAdd !: FormGroup;
  id_Edit = 0;
  lophocs:any;
  
  malop:any;

  //
  ngOnInit(): void {
   
    this.Dslichthi();
    this.DsLop();
    this.Dshocphan();
    this.formAdd = this.fb.group({
     
      malop: this.fb.control('', [Validators.required]),
      // masv: this.fb.control('', [Validators.required]),
      mahp: this.fb.control('', [Validators.required]),
      ngaythi: this.fb.control('', [Validators.required]),
      phongthi: this.fb.control('', [Validators.required]),
    
    });
    this.formEdit = this.fb.group({
      id: this.fb.control(''),
      malop: this.fb.control('', [Validators.required]),
      // masv: this.fb.control('', [Validators.required]),
      mahp: this.fb.control('', [Validators.required]),
      ngaythi: this.fb.control('', [Validators.required]),
      phongthi: this.fb.control('', [Validators.required]),
    });

  }
  Dslichthi() {
    //  this.spinner.show();
    this.lichthiService.getAll().subscribe(data => {
      this.lichthis = data;
      this.totalLength = data.length;
      console.log(this.lichthis);
      
      this.spinner.hide();
    });
  }

//
DsLop() {
  //  this.spinner.show();
    this.lichthiService.getlophoc().subscribe(data => {
      this.lophocs=data;
      this.malop=this.malop;
      console.log(this.lichthis);
     
      this.spinner.hide();
    });
  }
  Dshocphan() {
    //  this.spinner.show();
      this.lichthiService.gethocphan().subscribe(data => {
        this.mahp=this.mahp;
        this.hocphans=data;
      });
    }
//
  add() {
 
    this.lichthiService.add(this.formAdd.value).subscribe((data: any) => {
       //alert(data.toString());
      this.messageService.add({ severity: 'success', summary: 'Thông báo', detail: 'Đã thêm thành công' });
      setTimeout(() => {
        this.router.navigateByUrl('/admin/lichthi');
      }, 1000);
      location.reload();
    })

  }
  onEdit(mahp: any): void {
  
    this.lichthiService
      .getByid(mahp)

      .subscribe({
        next: (loai) => {
          this.id_Edit=loai.id;
          console.log(loai);
          this.formEdit = this.fb.group({
            id: this.fb.control(loai.id, [Validators.required]),
            malop: this.fb.control(loai.malop, [Validators.required]),
           
            mahp: this.fb.control(loai.mahp, [Validators.required]),
            ngaythi: this.fb.control(loai.ngaythi, [Validators.required]),
            phongthi: this.fb.control(loai.phongthi, [Validators.required]),
        
          });
       
       
        },
      });
  }
  update(){
    if(this.id_Edit>0){
      this.lichthiService.update(this.id_Edit,this.formEdit.value).subscribe((data: any) => {
        alert(data.toString());
        location.reload();
      
      })
    }
  }
  closeClick() {
    setTimeout(() => {
      this.router.navigateByUrl('/admin/lichthi');
    }, 1000);
    //this.clear();
  }
  deleteClick(item: any) {
    this.confirmationService.confirm({
      message: 'Bạn có muốn xóa lịch thi này ?',
      accept: () => {
        this.lichthiService.delete(item.id).subscribe(data => {
          this.messageService.add({ severity: 'success', summary: 'Thông báo', detail: 'Đã xóa thành công.' });
          this.DsLop();
          location.reload();
        });

      },
      reject: (type:any) => {
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
