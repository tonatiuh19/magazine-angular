export const decode_utf8 = (s: string) => {
  return decodeURIComponent(escape(s));
};

export const removeAccents = (str: any) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export const firsLetterUpperCase = (str: any) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getTitleByType = (type: number) => {
  if (type === 1) {
    return {
      title: 'Deportes',
      color: '#4d7530',
    };
  } else if (type === 2) {
    return {
      title: 'Ciencia',
      color: '#307275',
    };
  } else if (type === 3) {
    return {
      title: 'VideoJuegos',
      color: '#413075',
    };
  } else if (type === 4) {
    return {
      title: 'Música',
      color: '#75306c',
    };
  } else if (type === 5) {
    return {
      title: 'Cine y TV',
      color: '#756330',
    };
  } else if (type === 6) {
    return {
      title: 'Tecnología',
      color: '#753030',
    };
  } else if (type === 6) {
    return {
      title: 'Anime',
      color: '#753030',
    };
  }
};

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const isValidDate = (d: any) => {
  if (isNaN(d)) {
    //Checked for numeric
    var dt = new Date(d);
    if (isNaN(dt.getTime())) {
      //Checked for date
      return false; //Return string if not date.
    } else {
      return true; //Return date **Can do further operations here.
    }
  } else {
    return false; //Return string as it is number
  }
};
