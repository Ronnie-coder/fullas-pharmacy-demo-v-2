// A type for our mock prescription requests
export type PrescriptionRequest = {
  id: string;
  patientName: string;
  contact: string;
  date: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  fileUrl: string; // Mock URL
};