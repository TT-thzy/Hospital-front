import request from '@/utils/request'

const api_name = "/admin/hosp/hospitalSet"

export default {

    //分页查询
    getPageList(current, limit, searchObj) {
        return request({
            url: `${api_name}/${current}/${limit}`,
            method: 'post',
            data: searchObj
        })
    },

    //删除医院设置信息
    deleteHospSet(id) {
        return request({
            url: `${api_name}/${id}`,
            method: 'delete'
        })
    },

    //批量删除医院信息
    deleteBatchHospSet(idList) {
        return request({
            url: `${api_name}`,
            method: 'delete',
            data: idList
        })
    },

    //锁定和取消锁定
    lockOrUnlockHospSet(id,status) {
        return request({
            url: `${api_name}/${id}/${status}`,
            method: 'put',
        })  
    },

    //添加医院设置
    addHospSet(hospSet) {
        return request({
            url: `${api_name}`,
            method: 'post',
            data: hospSet
        })  
    },

    //根据id查询医院信息
    getHospSetById(id) {
        return request({
            url: `${api_name}/${id}`,
            method: 'get',
        })  
    },

    //更新医院
    updateHospSet(hospSet) {
        return request({
            url: `${api_name}`,
            method: 'put',
            data: hospSet
        })
    }

}