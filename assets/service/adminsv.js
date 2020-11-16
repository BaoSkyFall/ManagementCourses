function AdminService() {

}
AdminService.prototype.LayThongTinKhoaHoc = function()
{
    return $.ajax({
        type:"GET",
        url:" http://sv.myclass.vn/api/QuanLyTrungTam/DanhSachKhoaHoc"
    })
}

AdminService.prototype.LayThongTinNguoiDung = function()
{
    return $.ajax(
        {
            type:"GET",
            url:" http://sv.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung"
        }
    )
}
AdminService.prototype.LayThongTinHocVien = function()
{
    return $.ajax(
        {
            type:"GET",
            url:" http://sv.myclass.vn/api/QuanLyTrungTam/DanhSachHocVien"
        }
    )
}
AdminService.prototype.ThemKhoaHoc = function(khoahoc)
{
    
    
    return $.ajax({
        type:"POST",
        url:"http://sv.myclass.vn/api/QuanLyTrungTam/ThemKhoaHoc",
        contentType: "application/json",
        dataType:"json",
        data: khoahoc,
    })
}
AdminService.prototype.XoaKhoaHoc = function(id)
{
    return $.ajax(
        {
            type:"DELETE",
            url:`http://sv.myclass.vn/api/QuanLyTrungTam/XoaKhoaHoc/${id}`,
        }
    )
}