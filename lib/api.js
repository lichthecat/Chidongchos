// lib/api.js
import { supabase } from './supabase'
import { generateNickname } from '../utils/nickname'

// 글 저장
export async function savePost(content) {
  const nickname = generateNickname()
  const { data, error } = await supabase
    .from('posts')
    .insert([{ nickname, content }])

  if (error) {
    console.error('글 저장 실패:', error.message)
  }

  return { data, error }
}

// 글 불러오기
export async function loadPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('글 불러오기 실패:', error.message)
  }

  return { data, error }
}
