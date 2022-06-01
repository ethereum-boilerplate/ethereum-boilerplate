export function hooks(): string {
  return 'hooks';
}

export const useDefiDashboard = () => {
  return {
    func: () => alert('hook trigger')
  }
}
