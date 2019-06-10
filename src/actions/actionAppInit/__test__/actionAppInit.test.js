import { actionAppInit, APP_INIT } from '../actionAppInit';

describe('actionAppInit', () => {
  it('should create an action to app intiate', () => {
    const payload = 'Application Initialized';
    const expectedAction = {
      type: APP_INIT,
      payload,
    };
    expect(actionAppInit(payload)).toEqual(expectedAction);
  });
});
