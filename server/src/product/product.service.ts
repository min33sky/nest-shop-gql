import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  create(createProductInput: CreateProductInput) {
    return 'This action adds a new product';
  }

  async findAll() {
    return await this.prisma.product.findMany({});
  }

  async findOne(id: number) {
    return await this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
