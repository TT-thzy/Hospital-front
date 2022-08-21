import request from '@/utils/request'

const api_name = "/admin/cmn/dict"

export default {

    //查询数据字典列表
    getDictList(id) {
        return request({
            url: `${api_name}/${id}`,
            method: 'get',
        })
    },


}