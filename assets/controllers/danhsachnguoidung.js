function DanhSachNguoiDung()
{
    this.DSND=[];
}
DanhSachNguoiDung.prototype.ThemNguoiDung = function(nguoiDung){
    this.DSND.push(nguoiDung)
}
DanhSachNguoiDung.prototype.TimNguoiDungTheoTaiKhoan = function(taiKhoan){
    for(var i =0 ;i< this.DSND.length;i++){
        if(taiKhoan === this.DSND[i].TaiKhoan){
            return i;
        }
    }
}
DanhSachNguoiDung.prototype.XoaMotNguoiDung = function(taiKhoan){
    var index = this.TimNguoiDungTheoTaiKhoan(taiKhoan);
    this.DSND.splice(index,1);
}
DanhSachNguoiDung.prototype.XoaNhieuNguoiDung = function(mangTaiKhoan){
    for(var i =0 ;i<mangTaiKhoan.length;i++){
        for(var j=0 ; j<this.DSND.length;j++){
            if(mangTaiKhoan[i] === this.DSND[j].TaiKhoan){
                this.DSND.splice(j,1);
            }
        }
    }
}
DanhSachNguoiDung.prototype.TimNguoiDungTheoTen = function(tuKhoa){
    var DSTimKiem = new DanhSachNguoiDung();
    var tenCanTim = tuKhoa.toLowerCase().trim();
    for(var i =0 ;i< this.DSND.length;i++){
        if(this.DSND[i].HoTen.toLowerCase().search(tenCanTim) !== -1){
            DSTimKiem.ThemNguoiDung(this.DSND[i]);
        }
    }
    return DSTimKiem.DSND;
}
DanhSachNguoiDung.prototype.CapNhatNguoiDung = function(nguoiDungEdit){
    var index = this.TimNguoiDungTheoTaiKhoan(nguoiDungEdit.TaiKhoan);
    var nguoiDungHienTai = this.DSND[index];
    nguoiDungHienTai.MatKhau = nguoiDungEdit.MatKhau;
    nguoiDungHienTai.HoTen = nguoiDungEdit.HoTen;
    nguoiDungHienTai.Email = nguoiDungEdit.Email;
    nguoiDungHienTai.SoDT = nguoiDungEdit.SoDT;
}