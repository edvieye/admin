// src/hooks/useStudentForm.js
import { useState } from 'react';
import { addStudent, updateStudent } from '../services/studentService';
import toast from 'react-hot-toast';

export const useStudentForm = (initialData = null, onSuccess) => {
  const [formData, setFormData] = useState(
    initialData || {
      admissionNo: '',
      firstName: '',
      lastName: '',
      dob: '',
      gender: 'Male',
      class: '',
      section: '',
      rollNo: '',
      parentId: '',
      emergencyContactName: '',
      emergencyContactPhone: '',
      documents: [],
    }
  );
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (initialData) {
        await updateStudent(initialData.id, formData);
        toast.success('Student updated successfully');
      } else {
        await addStudent(formData);
        toast.success('Student added successfully');
      }
      onSuccess?.();
    } catch (error) {
      toast.error('Operation failed');
    } finally {
      setLoading(false);
    }
  };

  return { formData, updateField, step, setStep, loading, handleSubmit };
};