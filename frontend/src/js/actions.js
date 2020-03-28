import { SET_CURRENT_USER, LOGIN, SHOW_CARD, ASKFOR_FORM, SHOW_WINDOW, ASKFOR_WINDOW } from './actionTypes';
import { GET_USER_INFO, PATCH_USER_INFO, PATCH_USER_AVATAR, GET_ALBUM_INFO, PATCH_ALBUM_INFO, PREVIEW_PORTRAIT, PATCH_ALBUM_COVER } from './actionTypes';
import { GET_ALBUMS, DELETE_ALBUMS, ADD_ALBUM } from './actionTypes';
import { GET_IMAGES, DELETE_IMAGES, ADD_IMAGES } from './actionTypes';
import { TOGGLE_SELECT_MODE, REVISE_SELECTED_ID_ARR, SINGLE_SELECT, UPDATE_SINGLE_SELECTED_ID } from './actionTypes';

import axios from 'axios';

// action creater

// CurrentUser
export const setCurrentUser = (user) => {
	return {
		type: SET_CURRENT_USER,
		user
	}
}

// App
export const login = (bool) => {
	return {
		type: LOGIN,
		isLoggedIn: bool,
	}
}

export const showCard = (bool) => {
	return {
		type: SHOW_CARD,
		shouldShown: bool
	}
}

export const askForForm = (formTitle) => {
	return {
		type: ASKFOR_FORM,
		formTitle
	}
}

export const showWindow = (bool) => {
	return {
		type: SHOW_WINDOW,
		shouldShown: bool
	}
}

export const askForWindow = (windowTitle) => {
	return {
		type: ASKFOR_WINDOW,
		windowTitle
	}
}

// UserInfo
export const getUserInfo = (userId) => {
	return {
		type: GET_USER_INFO,
		payload: axios.get(`http://13.228.36.118/backend/user/${userId}`)
	}
}

export const patchUserInfo = (userId, description) => {
	return {
		type: PATCH_USER_INFO,
		payload: axios({
			method: 'patch',
		  	url: `http://13.228.36.118/backend/user/${userId}/info`,
		  	data: {
		    	description
		  	}
		})
	}
}

// export const patchUserAvatar = (formData) => {
// 	return {
// 		type: PATCH_USER_AVATAR,
// 		payload: axios({
//             method: 'patch',
//             url: 'http://13.228.36.118/backend/upload/avatar',
//             data: formData,
//             headers: {'Content-Type': 'multipart/form-data' }
//         })
// 	}
// }
export const patchUserAvatar = (data) => {
	return {
		type: PATCH_USER_AVATAR,
		payload: axios({
            method: 'patch',
            url: `http://13.228.36.118/backend/user/${data.userId}/avatar`,
            data
        })
	}
}

// AlbumInfo
export const getAlbumInfo = (albumId, userId) => {
	return {
		type: GET_ALBUM_INFO,
		payload: axios.get(`http://13.228.36.118/backend/album/info/${albumId}/${userId}`)
	}
}

export const patchAlbumInfo = (albumId, data) => {
	return {
		type: PATCH_ALBUM_INFO,
		payload: axios({
			method: 'patch',
		  	url: `http://13.228.36.118/backend/album/${albumId}/info`,
		  	data: {
		    	name: data.name,
		    	description: data.description
		  	}
		})
	}
}

export const previewPortrait = (id) => {
	return {
		type: PREVIEW_PORTRAIT,
		id
	}
}

// Catalog
export const getAlbums = (userId) => {
	return {
		type: GET_ALBUMS,
		payload: axios.get(`http://13.228.36.118/backend/album/user/${userId}`)
	}
}

export const deleteAlbums = (albumIdArr) => {
	return {
		type: DELETE_ALBUMS,
		payload: axios({
			method: 'delete',
		  	url: 'http://13.228.36.118/backend/album',
		  	data: {
		    	idArr: albumIdArr
		  	}
		})
	}
}

// export const addAlbum = (formData) => {
// 	return {
// 		type: ADD_ALBUM,
// 		payload: axios({
//             method: 'post',
//             url: 'http://13.228.36.118/backend/upload/album',
//             data: formData,
//             headers: {'Content-Type': 'multipart/form-data'}
//         })
// 	}
// }
export const addAlbum = (data) => {
	return {
		type: ADD_ALBUM,
		payload: axios({
            method: 'post',
            url: 'http://13.228.36.118/backend/album',
            data
        })
	}
}

// Album
export const getImages = (albumId, userId) => {
	return {
		type: GET_IMAGES,
		payload: axios.get(`http://13.228.36.118/backend/image/album/${albumId}/${userId}`)
	}
}

export const deleteImages = (imageIdArr) => {
	return {
		type: DELETE_IMAGES,
		payload: axios({
			method: 'delete',
		  	url: 'http://13.228.36.118/backend/image',
		  	data: {
		    	idArr: imageIdArr
		  	}
		})
	}
}

// export const addImages = (formData) => {
// 	return {
// 		type: ADD_IMAGES,
// 		payload: axios({
//             method: 'post',
//             url: 'http://13.228.36.118/backend/upload/image',
//             data: formData,
//             headers: {'Content-Type': 'multipart/form-data' }
//         })
// 	}
// }
export const addImages = (data) => {
	return {
		type: ADD_IMAGES,
		payload: axios({
            method: 'post',
            url: 'http://13.228.36.118/backend/image',
            data
        })
	}
}

export const patchAlbumCover = (albumId, imageId) => {
	return {
		type: PATCH_ALBUM_COVER,
		payload: axios({
			method: 'patch',
		  	url: `http://13.228.36.118/backend/album/${albumId}/cover`,
		  	data: {
		    	imageId
		  	}
		}) 
	}
}

// Catalog & Album
export const toggleSelectMode = () => {
	return {
		type: TOGGLE_SELECT_MODE
	}
}

export const singleSelect = (bool) => {
	return {
		type: SINGLE_SELECT,
		isSingleSelect: bool
	}
}

export const reviseSelectedIdArr = (id) => {
	return {
		type: REVISE_SELECTED_ID_ARR,
		id
	}
}

export const updateSingleSelectedId = (id) => {
	return {
		type: UPDATE_SINGLE_SELECTED_ID,
		id
	}
}
