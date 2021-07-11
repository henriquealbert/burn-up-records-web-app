import { Enum_Release_Status, Maybe } from 'graphql/generated'

export const getStatusColor = (status?: Maybe<Enum_Release_Status>) => {
  if (!status) return
  switch (status) {
    case 'negado':
      return 'brand.gray.2'

    default:
      return 'brand.bg'
  }
}

export const getStatusBgColor = (status?: Maybe<Enum_Release_Status>) => {
  if (!status) return
  switch (status) {
    case 'negado':
      return 'brand.gray.1'

    case 'analise':
      return 'brand.gray.2'

    case 'aprovado':
      return 'brand.gray.3'

    case 'corrigir':
      return 'brand.error.1'

    case 'lancado':
      return 'black'
  }
}

export const getStatusName = (status?: Maybe<Enum_Release_Status>) => {
  switch (status) {
    case 'negado':
      return 'Reprovado'

    case 'analise':
      return 'Em análise'

    case 'aprovado':
      return 'Aprovado'

    case 'corrigir':
      return 'Corrigir'

    case 'lancado':
      return 'Lançado'

    default:
      return status
  }
}
