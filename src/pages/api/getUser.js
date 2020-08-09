import getUser from '../../utils/getUser';

const apiGetUser = async (req, res) => {
  const data = await getUser('mandimartins');
  return res.json(data);
};

export default apiGetUser;
