import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { KetquahoctapService } from 'src/app/services/ketquahoctap.service';

@Component({
  selector: 'app-ketqua',
  templateUrl: './ketqua.component.html',
  styleUrls: ['./ketqua.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class KetquaComponent implements OnInit {

  constructor(private ketquahoctapService: KetquahoctapService,
    private router: Router,
   private readonly messageService: MessageService,
   private confirmationService: ConfirmationService,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder) { }
  ketquas: any = [];
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
   
    this.Dsketqua();
    this.DsLop();
    this.Dshocphan();
    this.formAdd = this.fb.group({
     
     
      // masv: this.fb.control('', [Validators.required]),
      mahp: this.fb.control('', [Validators.required]),
      masv: this.fb.control('', [Validators.required]),
      diemlan1: this.fb.control('', [Validators.required]),
      diemlan2: this.fb.control('', [Validators.required]),
      diemtb: this.fb.control('', [Validators.required]),
      ghichu: this.fb.control('', [Validators.required]),
    });
    this.formEdit = this.fb.group({
      id: this.fb.control(''),
     
       masv: this.fb.control('', [Validators.required]),
      mahp: this.fb.control('', [Validators.required]),
      diemlan1: this.fb.control('', [Validators.required]),
      diemlan2: this.fb.control('', [Validators.required]),
      diemtb: this.fb.control('', [Validators.required]),
      ghichu: this.fb.control('', [Validators.required]),
    });

  }
  Dsketqua() {
    //  this.spinner.show();
    this.ketquahoctapService.getAll().subscribe(data => {
      this.ketquas = data;
      this.totalLength = data.length;
      console.log(this.ketquas);
      
      this.spinner.hide();
    });
  }

//
DsLop() {
  //  this.spinner.show();
    this.ketquahoctapService.getsv().subscribe(data => {
      this.lophocs=data;
      this.malop=this.malop;
     // console.log(this.lichthis);
     
      this.spinner.hide();
    });
  }
  Dshocphan() {
    //  this.spinner.show();
      this.ketquahoctapService.gethocphan().subscribe(data => {
        this.mahp=this.mahp;
        this.hocphans=data;
      });
    }
//
  add() {
 
    this.ketquahoctapService.add(this.formAdd.value).subscribe((data: any) => {
       //alert(data.toString());
      this.messageService.add({ severity: 'success', summary: 'Thông báo', detail: 'Đã thêm thành công' });
      setTimeout(() => {
        this.router.navigateByUrl('/admin/lichthi');
      }, 1000);
      location.reload();
    })

  }
  onEdit(mahp: any): void {
  
    this.ketquahoctapService
      .getByid(mahp)

      .subscribe({
        next: (loai) => {
          this.id_Edit=loai.id;
          console.log(loai);
          this.formEdit = this.fb.group({
            id: this.fb.control(loai.id),
           
            masv: this.fb.control(loai.masv, [Validators.required]),
            mahp: this.fb.control(loai.mahp, [Validators.required]),
            diemlan1: this.fb.control(loai.diemlan1, [Validators.required]),
            diemlan2: this.fb.control(loai.diemlan2, [Validators.required]),
            diemtb: this.fb.control(loai.diemtb, [Validators.required]),
            ghichu: this.fb.control(loai.ghichu, [Validators.required]),
        
          });
       
       
        },
      });
  }
  update(){
    if(this.id_Edit>0){
      this.ketquahoctapService.update(this.id_Edit,this.formEdit.value).subscribe((data: any) => {
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
      message: 'Bạn có muốn xóa kết quả này ?',
      accept: () => {
        this.ketquahoctapService.delete(item.id).subscribe(data => {
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
