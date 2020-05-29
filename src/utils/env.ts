// EXPORTAR UNA SOLA CLASE QUE EXPORTE TANTO EL VALOR DE TRUES,FALSES COMO LA FUNCIÓN

export const FALSE_VALUES = ['false', 'FALSE', 'False', '0', 0, false];
export const TRUE_VALUES = ['true', 'TRUE', 'True', '1', 1, true];

export default function envs(envvar: string, deafultValue?: any): string | boolean | null {
  const val = process.env[envvar];
  if (typeof val === 'undefined') {
    return deafultValue !== undefined ? deafultValue : null;
  }
  if (TRUE_VALUES.indexOf(val) !== -1) return true;
  if (FALSE_VALUES.indexOf(val) !== -1) return false;
  return val;
}
