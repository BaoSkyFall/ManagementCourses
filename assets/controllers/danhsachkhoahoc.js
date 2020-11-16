function DanhSachKhoaHoc()
{
    this.DSKH=[];
}
DanhSachKhoaHoc.prototype.ThemKhoaHoc = function(khoaHoc){
    this.DSKH.push(khoaHoc)
}
DanhSachKhoaHoc.prototype.XoaNhieuKhoaHoc = function(mangTaiKhoan){
    for(var i =0 ;i<mangTaiKhoan.length;i++){
        for(var j=0 ; j<this.DSKH.length;j++){
            if(mangTaiKhoan[i].MaKhoaHoc === this.DSKH[j].MaKhoaHoc){
                this.DSKH.splice(j,1);
            }
        }
    }
}
DanhSachKhoaHoc.prototype.TimKhoaHocTheoTen = function(tuKhoa){
    var DSTimKiem = new DanhSachKhoaHoc();
    var tenCanTim = tuKhoa.toLowerCase().trim();
    for(var i =0 ;i< this.DSKH.length;i++){
        if(this.DSKH[i].TenKhoaHoc.toLowerCase().search(tenCanTim) !== -1){
            DSTimKiem.ThemKhoaHoc(this.DSKH[i]);
        }
    }
    return DSTimKiem.DSKH;
}