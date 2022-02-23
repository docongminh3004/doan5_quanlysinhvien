import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { SinhvienService } from 'src/app/services/sinhvien.service';

@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class SinhvienComponent implements OnInit {

  constructor(private sinhvienService: SinhvienService,
    private router: Router,
    private readonly messageService: MessageService,
    private confirmationService: ConfirmationService,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder) { }
  sinhviens: any = [];
  lophocs:any=[];
  malop:any;
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
    
    this.DsSinhvien();
    this.DsLophoc();
    this.formAdd = this.fb.group({
      masv: this.fb.control('', [Validators.required]),
      tensv: this.fb.control('', [Validators.required]),
      malop: this.fb.control('', [Validators.required]),
      ngaysinh: this.fb.control('', [Validators.required]),
      diachi: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required]),
      dienthoai: this.fb.control('', [Validators.required]),
      matkhau: this.fb.control('', [Validators.required]),
      chuyennganh: this.fb.control('', [Validators.required]),
      hedaotao: this.fb.control('', [Validators.required]),
      nganhhoc: this.fb.control('', [Validators.required]),
      nienkhoa: this.fb.control('', [Validators.required]),
    });
    this.formEdit = this.fb.group({
      masv: this.fb.control('', [Validators.required]),
      tensv: this.fb.control('', [Validators.required]),
      malop: this.fb.control('', [Validators.required]),
      ngaysinh: this.fb.control('', [Validators.required]),
      diachi: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required]),
      dienthoai: this.fb.control('', [Validators.required]),
      matkhau: this.fb.control('', [Validators.required]),
      chuyennganh: this.fb.control('', [Validators.required]),
      hedaotao: this.fb.control('', [Validators.required]),
      nganhhoc: this.fb.control('', [Validators.required]),
      nienkhoa: this.fb.control('', [Validators.required]),
    });

  }

  DsSinhvien() {
    //this.spinner.show();
    this.sinhvienService.getAll().subscribe(data => {
      this.sinhviens = data;
      this.totalLength = data.length;
      console.log(this.sinhviens);
      this.spinner.hide();
    });
  }
  DsLophoc(){
    this.sinhvienService.getLophoc().subscribe((data: any) => {
      this.lophocs = data;//lay du lieu 
      this.malop=this.malop;
    });
  }
  add() {
   
    this.sinhvienService.add(this.formAdd.value).subscribe((data: any) => {
      alert(data.toString());
      // this.messageService.add({ severity: 'success', summary: 'Thông báo', detail: 'Đã thêm thành công' });
      setTimeout(() => {
        this.DsSinhvien();
      }, 1000);
    
    })

  }
  onEdit(masv: any): void {

    this.sinhvienService
      .getByid(masv)

      .subscribe({
        next: (loai) => {
          this.id_Edit = loai.masv;
          console.log(loai);
          this.formEdit = this.fb.group({
            masv: this.fb.control(loai.masv, [Validators.required]),
            tensv: this.fb.control(loai.tensv, [Validators.required]),
            malop: this.fb.control(loai.malop, [Validators.required]),
            ngaysinh: this.fb.control(loai.ngaysinh, [Validators.required]),
            diachi: this.fb.control(loai.diachi, [Validators.required]),
            email: this.fb.control(loai.email, [Validators.required]),
            dienthoai: this.fb.control(loai.dienthoai, [Validators.required]),
            matkhau: this.fb.control(loai.matkhau, [Validators.required]),
            chuyennganh: this.fb.control(loai.chuyennganh, [Validators.required]),
            hedaotao: this.fb.control(loai.hedaotao, [Validators.required]),
            nganhhoc: this.fb.control(loai.nganhhoc, [Validators.required]),
            nienkhoa: this.fb.control(loai.nienkhoa, [Validators.required]),
          });
        

        },
      });
  }
  update() {
    if (this.id_Edit > 0) {
      this.sinhvienService.update(this.id_Edit, this.formEdit.value).subscribe((data: any) => {
        alert(data.toString());
       
        setTimeout(() => {//thời gian update dữ liệu sau khi thực thi 1 chức năg
          
          this.DsSinhvien();//update lại ds mới
        }, 1000);
      })
    }
  }
  closeClick() {
    setTimeout(() => {
      this.router.navigateByUrl('/admin/sinhvien');
    }, 1000);
    //this.clear();
  }
  deleteClick(item: any) {
    this.confirmationService.confirm({
      message: 'Bạn có muốn loại bỏ sinh viên này ?',
      accept: () => {
        this.sinhvienService.delete(item.masv).subscribe(data => {
          this.messageService.add({ severity: 'success', summary: 'Thông báo', detail: 'Đã xóa thành công.' });
          this.DsSinhvien();
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

  clearFormAdd() {
    this.formAdd.reset();
  }

}
