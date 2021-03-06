import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {
  private _serverAddress = 'http://' + window.location.hostname  + ':8888/' ; // 'http://localhost:8888/';
  private _logCommunication = false;

  // 不显示Org
  private _displayOrg = false;
  // 不显示OrgSchema
  private _displayOrgSchema = false;
  // 不显示BizEntitySchema
  private _displayBizEntitySchema = false;

  constructor() { }

  get serverAddress(): string {
    return this._serverAddress;
  }

  get logCommunication(): boolean {
    return this._logCommunication;
  }

  get displayOrgSchema(): boolean {
    return this._displayOrgSchema;
  }

  get displayBizEntitySchema(): boolean {
    return this._displayBizEntitySchema;
  }

  get displayOrg(): boolean {
    return this._displayOrg;
  }
}
