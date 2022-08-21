import request from '@/utils/request'

const api_name = "/admin/hosp/department"
export default {
    //科室列表
    getDepartmentList(hoscode) {
        return request({
            url: `${api_name}/getDeptList/${hoscode}`,
            method: 'get',
        })
    },
}