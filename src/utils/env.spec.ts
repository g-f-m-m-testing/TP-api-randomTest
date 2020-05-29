import envs, { TRUE_VALUES, FALSE_VALUES } from './env';

describe('Env utility', () => {
  it('Should return null with no env Var setted or Default value not passed', () => {
    const result = envs('environment');

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(result).toEqual(null);
  });
  it('Should return default value if no env Var was found', () => {
    const defaultValue: string = 'development';

    const result = envs('environment', defaultValue);

    expect(result).toEqual(defaultValue);
  });

  it('Should get env var if seted even if default value is different', () => {
    // eslint-disable-next-line no-multi-assign
    const envVar = (process.env.environment = 'testing');

    const defaultValue: string = 'development';

    const result = envs('environment', defaultValue);

    expect(result).toEqual(envVar);
  });

  it('Should return true if the value of var is equal to any of TRUE_VALUES array', () => {
    TRUE_VALUES.forEach(x => {
      process.env.production = x.toString();
      expect(envs('production')).toEqual(true);
    });
  });

  it('Should return false if the value of var is equal to any of TRUE_VALUES array', () => {
    FALSE_VALUES.forEach(x => {
      process.env.production = x.toString();
      expect(envs('production')).toEqual(false);
    });
  });
});
