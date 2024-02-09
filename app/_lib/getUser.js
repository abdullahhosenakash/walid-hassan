const getUser = async () => {
  try {
    const response = await import('../api/auth/user/route');
    const { user } = await (await response.GET()).json();
    return {
      user,
      error: null
    };
  } catch (error) {
    return {
      user: null,
      error: 'not found'
    };
  }
};

export default getUser;
