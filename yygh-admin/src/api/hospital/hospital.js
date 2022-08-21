import request from '@/utils/request'

const api_name = "/admin/hosp/hospital"
export default {
    //医院列表
    getHospitalPage(page, limit, searchObj) {
        return request({
            url: `${api_name}/${page}/${limit}`,
            method: 'get',
            params: searchObj
        })
    },
    //查询所有市
    findByDictCode(dictCode) {
        return request({
            url: `/admin/cmn/dict//findByDictCode/${dictCode}`,
            method: 'get'
        })
    },
    //二级联动市
    findByParentId(value) {
        return request({
            url: `/admin/cmn/dict/${value}`,
            method: 'get'
        })

    },
    //更新上线状态
    updateStatus(id,status){
        return request({
            url: `${api_name}/${id}/${status}`,
            method: 'put'
        })
    },

    //获取医院详情
    getHospById(id){
        return request({
            url: `${api_name}/${id}`,
            method: 'get'
        })
    },

    

}