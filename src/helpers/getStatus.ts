import { Status, Maybe } from 'graphql/generated'

export const getStatusColor = (status?: Maybe<Status>) => {
  if (!status) return
  switch (status) {
    case Status.Reprovado:
      return 'brand.gray.2'

    default:
      return 'brand.bg'
  }
}

export const getStatusBgColor = (status?: Maybe<Status>) => {
  if (!status) return
  switch (status) {
    case Status.Reprovado:
      return 'brand.gray.1'

    case Status.Analise:
      return 'brand.gray.2'

    case Status.Aprovado:
      return 'brand.gray.3'

    case Status.Corrigir:
      return 'brand.error.1'

    case Status.Lancado:
      return 'black'
  }
}

export const getStatusName = (status?: Maybe<Status>) => {
  switch (status) {
    case Status.Reprovado:
      return 'Reprovado'

    case Status.Analise:
      return 'Em análise'

    case Status.Aprovado:
      return 'Aprovado'

    case Status.Corrigir:
      return 'Corrigir'

    case Status.Lancado:
      return 'Lançado'

    default:
      return status
  }
}
