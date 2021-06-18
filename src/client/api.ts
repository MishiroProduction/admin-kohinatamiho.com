import axios from 'axios'
import { API_BASE_URL } from '../../config/config'

export interface SendCredential {
  mail_address: string
  password: string
}

export interface LoginResponse {
  status: boolean
  message: string
  errors: null | Record<string, unknown>
  data: {
    users: {
      id: number
      mail_address: string
      user_name: string
      status: boolean
      role: number
      created_at: string
      updated_at: string
    }
    access_token: string
  }
}

export interface LogoutResponse {
  status: boolean
}

export interface BearerAuthenticationResponseSuccess {
  status: boolean
  data: {
    id: number
    mail_address: string
    user_name: string
  }
}

export interface BearerAuthenticationResponseError {
  status: boolean
  msg: string
}


export default class ApiRequest {
  static async postLoginRequest(credential: SendCredential): Promise<LoginResponse> {
    const result = await axios({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      url: `${API_BASE_URL}/api/users/login`,
      data: credential
    })
    console.log(result)
    return result.data
  }

  static async postLogoutAction(accessToken: string): Promise<LogoutResponse> {
    const result = await axios({
      method: 'GET',
      url: `${API_BASE_URL}/api/users/logout`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return result.data.status
  }

  static async bearerAuthentication(
    accessToken: string
  ): Promise<LoginResponse> {
    const result = await axios({
      method: 'GET',
      url: `${API_BASE_URL}/api/auth/`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return result.data
  }

}
