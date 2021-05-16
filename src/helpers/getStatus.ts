export const getStatusColor = (status: string) => {
  switch (status) {
    case 'analise':
      return 'yellow'

    case 'aprovado':
      return 'green'

    case 'corrigir':
      return 'orange'

    case 'negado':
      return 'red'

    case 'lancado':
      return 'teal'
  }
}

export const getStatusName = (status: string) => {
  switch (status) {
    case 'analise':
      return 'análise'

    case 'aprovado':
      return status

    case 'corrigir':
      return status

    case 'negado':
      return status

    case 'lancado':
      return 'lançado'
  }
}
