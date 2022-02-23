import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { LichhocService } from 'src/app/services/lichhoc.service';

@Component({
  selector: 'app-lichhoc',
  templateUrl: './lichhoc.component.html',
  styleUrls: ['./lichhoc.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class LichhocComponent implements OnInit {
  

  constructor(private lichhocService: LichhocService,
    private router: Router,
   private readonly messageService: MessageService,
   private confirmationService: ConfirmationService,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder) { }
  lichhocs: any = [];
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
   
    this.Dslichhoc();
    this.DsLop();
    this.Dshocphan();
    this.formAdd = this.fb.group({
     
      malop: this.fb.control('', [Validators.required]),
      mahp: this.fb.control('', [Validators.required]),
      ngayhoc: this.fb.control('', [Validators.required]),
      phonghoc: this.fb.control('', [Validators.required]),
      giaovien: this.fb.control('', [Validators.required]),
      tiethoc: this.fb.control('', [Validators.required]),
      buoihoc: this.fb.control('', [Validators.required]),
    });
    this.formEdit = this.fb.group({
      id: this.fb.control(''),
      malop: this.fb.control('', [Validators.required]),
      mahp: this.fb.control('', [Validators.required]),
      ngayhoc: this.fb.control('', [Validators.required]),
      phonghoc: this.fb.control('', [Validators.required]),
      giaovien: this.fb.control('', [Validators.required]),
      tiethoc: this.fb.control('', [Validators.required]),
      buoihoc: this.fb.control('', [Validators.required]),
    });

  }

  Dslichhoc() {
  //  this.spinner.show();
    this.lichhocService.getAll().subscribe(data => {
      this.lichhocs = data;
      this.totalLength = data.length;
      console.log(this.lichhocs);
      this.ds=data;
      this.spinner.hide();
    });
  }

//
DsLop() {
  //  this.spinner.show();
    this.lichhocService.getlophoc().subscribe(data => {
      this.lophocs=data;
      this.malop=this.malop;
      console.log(this.lichhocs);
     
      this.spinner.hide();
    });
  }
  Dshocphan() {
    //  this.spinner.show();
      this.lichhocService.gethocphan().subscribe(data => {
        this.mahp=this.mahp;
        this.hocphans=data;
      });
    }
//
  add() {
 
    this.lichhocService.add(this.formAdd.value).subscribe((data: any) => {
       //alert(data.toString());
      this.messageService.add({ severity: 'success', summary: 'Thông báo', detail: 'Đã thêm thành công' });
      setTimeout(() => {
        this.router.navigateByUrl('/admin/lichhoc');
      }, 1000);
      location.reload();
    })

  }
  onEdit(mahp: any): void {
  
    this.lichhocService
      .getByid(mahp)

      .subscribe({
        next: (loai) => {
          this.id_Edit=loai.id;
          console.log(loai);
          this.formEdit = this.fb.group({
            id: this.fb.control(loai.id, [Validators.required]),
            malop: this.fb.control(loai.malop, [Validators.required]),
            mahp: this.fb.control(loai.mahp, [Validators.required]),
            ngayhoc: this.fb.control(loai.ngayhoc, [Validators.required]),
            phonghoc: this.fb.control(loai.phonghoc, [Validators.required]),
            giaovien: this.fb.control(loai.giaovien, [Validators.required]),
            tiethoc: this.fb.control(loai.tiethoc, [Validators.required]),
            buoihoc: this.fb.control(loai.buoihoc, [Validators.required]),
          });
       
       
        },
      });
  }
  update(){
    if(this.id_Edit>0){
      this.lichhocService.update(this.id_Edit,this.formEdit.value).subscribe((data: any) => {
        alert(data.toString());
        location.reload();
      
      })
    }
  }
  closeClick() {
    setTimeout(() => {
      this.router.navigateByUrl('/admin/lichhoc');
    }, 1000);
    //this.clear();
  }
  deleteClick(item: any) {
    this.confirmationService.confirm({
      message: 'Bạn có muốn xóa lịch học này ?',
      accept: () => {
        this.lichhocService.delete(item.id).subscribe(data => {
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
