
window.addEventListener( 'load', 
  () => {
      // createCookie( 'name', 'rodrigo', 2 )  
      // createCookie( 'name1', 'rodrigo', 2 )  
      // createCookie( 'name2', 'rodrigo', 2 )  
      // createCookie( 'name3', 'rodrigo', 2 )  
      // console.log( getCookie( 'name' ) )
      // deleteCookie('name')
  })

const createCookie = ( name, value, days ) => {
  let date = new Date(), expires = ''
      date.setTime( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) )
      expires = `expires=${ date.toUTCString() }`
    document.cookie = `${ name }=${ value };${ expires }; path=/`
}

const getCookie = cookieName => {
  let cname     = `${ cookieName }=`, decodeCookie = ''
  decodeCookie  = document.cookie.split( ';' )
  return decodeCookie.some( itm => 
    itm.trim()
      .slice( 0, cname.length ) === cname
    )
}

const deleteCookie = cookieName => {
  let  date = new Date(), dateExpires = ''
  date.setTime( date.getTime() + ( -1 * 24 * 60 * 60 * 1000 ) )
  dateExpires = `expires= ${ date.toUTCString() };`
  if( getCookie( cookieName) ){
    document.cookie = `${cookieName}=;${dateExpires}; path=/`
  }
}

const checkCookie = cookieName => {
  let cname = cookieName + '='
  return document.cookie.split(';').some( itm => {
      return itm
      .trim()
      .slice( 0, cname.length ) === cname
      ? itm
      : ''
  } )
}
const deleteCookieGA = cookieName => {
  let cname       = cookieName+'=;', date = new Date()
  date.setTime( date.getTime() + ( -5 * 24 * 60 * 60 * 1000 ) )
  if( checkCookie( cookieName ) ){
      document.cookie = cname+'expires= '+date.toUTCString()+';'+' path=/;'
  }else{
      console.log('this cookie was not found')
  }
}