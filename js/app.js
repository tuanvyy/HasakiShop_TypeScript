import { hv_arr, coso_arr, khoahoc_arr } from './data.js';
const hien1KhoaHoc = (khoa) => {
    return `<div>
     <img src="${khoa.hinh}">
     <p> ${khoa.ghichu}</p>
    </div>`;
};
export const showlistkhoahoc = () => {
    const html_arr = khoahoc_arr.map(hien1KhoaHoc);
    return html_arr.join("");
};
const phaicuahv = (phai) => {
    if (typeof phai == 'boolean') {
        if (phai == true)
            return "Nữ";
        else
            return "Nam";
    }
    else
        return phai;
};
const hien1HV = (hv) => {
    return `<div>
      <img src="${hv.hinh}">
       <p> ${hv.gia}</p>
     <h4> ${hv.ten} </h4>
     <p> ${hv.ghichu}</p>
    </div>`;
};
export const showlisthocvien = () => {
    const html_arr = hv_arr.map(hien1HV);
    return html_arr.join("");
};

const hien1CoSo = (coso) => {
    return `<div>
     <img src="${coso.hinh}">
     <h4>${coso.ten} </h4>
     <p>${coso.gia}</p>
    </div>`;
};
export const showlistcoso = () => {
    const html_arr = coso_arr.map(hien1CoSo);
    return html_arr.join("");
};

const show1thuonghieu = (th) => {
    return `<div>${th.ten}</div> `;
};
export const showlistthuonghieu = async () => {
    let thuonghieu_arr = await fetch("http://localhost:3000/thuong_hieu")
        .then(res => res.json())
        .then(data => { return data; });
    let str = ``;
    thuonghieu_arr.forEach(th => str += show1thuonghieu(th));
    return str;
};
