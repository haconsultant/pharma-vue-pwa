import request from '@/utils/requester'

export function fetchPosts () {
  return request({
    url: '/posts',
    method: 'get'
  })
}

export function fetchPostsComments (id) {
  return request({
    url: `/posts/${id}/comments`,
    method: 'get'
  })
}
