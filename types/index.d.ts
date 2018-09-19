import './vue';
import Vue, {ComponentOptions, PluginFunction, AsyncComponent, VueConstructor} from 'vue';
import {AxiosResponse, AxiosRequestConfig, AxiosInstance} from 'axios';

export default function plugin(Vue: VueConstructor, options?: any): void;

export interface AuthenticateOptions {
  baseUrl?: string;
  tokenName?: string;
  tokenPrefix?: string;
  tokenHeader?: string;
  tokenType?: string;
  loginUrl?: string;
  registerUrl?: string;
  logoutUrl?: string;
  authCheckUrl?: string;
  storageType?: string;
  storageNamespace?: string;
  cookieStorage?: CookieStorageOptions;
  requestDataKey?: string;
  responseDataKey?: string;
  bindRequestInterceptor?: ($auth: VueAuthenticate) => void;
  withCredentials?: boolean;
  providers: { [key: string]: ProviderOptions };
}

export interface CookieStorageOptions {
  domain?: string;
  path?: string;
  secure?: boolean;
}

export interface ProviderOptions {
  name?: string;
  url?: string;
  clientId?: string;
  authorizationEndpoint?: string;
  redirectUri?: string;
  requiredUrlParams?: string[];
  defaultUrlParams?: string[];
  optionalUrlParams?: string[];
  scope?: string[];
  scopePrefix?: string;
  scopeDelimiter?: string;
  state?: string;
  display?: string;
  oauthType?: string;
  responseType?: string;
  responseParams?: {
    code?: string;
    clientId?: string;
    redirectUri?: string;
  };
  popupOptions?: {
    width: number;
    height: number;
  };
}

export declare class VueAuthenticate {
  public constructor($http: AxiosInstance, overrideOptions: AuthenticateOptions);
  public login(user: object): Promise<AxiosResponse>;
  public login(user: object, requestOptions: AxiosRequestConfig): Promise<AxiosResponse>;

  public isAuthenticated(): boolean;

  public getToken(): string;

  public setToken(token: string | object): void;

  public register(user: any, requestOptions?: AxiosRequestConfig): Promise<AxiosResponse>;

  public logout(requestOptions?: AxiosRequestConfig): Promise<AxiosResponse>;

  public authenticate(provider: string, userData: any, requestOptions?: AxiosRequestConfig): Promise<{}>;

  public authenticateSession(provider: string, userData: any, requestOptions?: AxiosRequestConfig): Promise<{}>;
}
