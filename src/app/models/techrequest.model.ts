export class TechRequest {
  constructor(id: number, device: string, parameters: string, reason: string, creationDate: string, status: string) {
    this.id = id;
    this.device = device;
    this.parameters = parameters;
    this.reason = reason;
    this.creationDate = creationDate;
    this.status = status;
  }

  id: number;
  device: string;
  parameters: string;
  reason: string;
  creationDate: string;
  status: string;
}
