import { Mutation, Action, VuexModule, getModule, Module } from 'vuex-module-decorators'
import { Store } from 'vuex'
import { RootState } from './store'
import UserStateType from '../modules/User'
import ApiRequest, { LoginResponse, SendCredential } from '../client/api'

@Module({ name: 'UserModuleStore', namespaced: true, stateFactory: true })
export class UserModuleClass extends VuexModule {
  user: UserStateType = {
    mailAddress: '',
    userName: '',
    status: false,
    role: 0,
    createdAt: '',
    updatedAt: '',
    accessToken: '',
  }

  public isLogin = false

  @Mutation
  public SET_USER(param: UserStateType): void {
    this.user = param
  }

  @Mutation
  public SET_IS_LOGIN(param: boolean): void {
    this.isLogin = param
  }

  @Action({ rawError: true })
  public async loginAction(credential: SendCredential): Promise<void> {
    const result: LoginResponse = await ApiRequest.postLoginRequest(credential)
    if (result.status) {
      document.cookie = 'access_token=' + result.data.access_token + ';max-age=1800;'
      await this.SET_USER({
        mailAddress: result.data.user.mail_address,
        userName: result.data.user.user_name,
        status: result.data.user.status,
        role: result.data.user.role,
        createdAt: result.data.user.created_at,
        updatedAt: result.data.user.updated_at,
        accessToken: result.data.access_token,
      })
      await this.SET_IS_LOGIN(true)
    }
  }

  @Action({ rawError: true })
  public async logoutAction(): Promise<void> {
    let accessToken = ''
    const cookies = document.cookie
    const cookiesArray = cookies.split('; ')
    for (const c of cookiesArray) {
      const keyValue = c.split('=')
      if (keyValue[0] === 'access_token') {
        accessToken = keyValue[1]
      }
    }
    await ApiRequest.postLogoutAction(accessToken)
  }

  @Action({ rawError: true })
  public async isLoginCheckAction(): Promise<void> {
    let accessToken = ''
    const cookies = document.cookie
    const cookiesArray = cookies.split('; ')
    for (const c of cookiesArray) {
      const keyValue = c.split('=')
      if (keyValue[0] === 'access_token') {
        accessToken = keyValue[1]
      }
    }

    const result: LoginResponse = await ApiRequest.bearerAuthentication(accessToken)
    if (result.status) {
      await this.SET_IS_LOGIN(true)
    }
  }
}

const UserVuexModule = (store?: Store<RootState>) => getModule(UserModuleClass, store)
export default UserVuexModule

export function registerUserModule(store: Store<RootState>): void {
  if (!store.state.UserModuleStore) {
    store.registerModule('UserModuleStore', UserModuleClass)
  }
}
