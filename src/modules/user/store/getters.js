export default {
  username: state => state.username,
  address: state => state.address,
  email: state => state.email,
  id: state => state.id,
  phone: state => state.phone,
  remark: state => state.remark,
  userType: state => state.userType == '1' ? '个人' : '企业'
}
