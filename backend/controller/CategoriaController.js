const Categoria = require('../models/categoria');

module.exports = class CategoriaController {

    static async CadastroCategoria(req, res) {
        try {
            const {NOME_CATEGORIA} = req.body;


            if (!NOME_CATEGORIA) {
                return res.status(422).json({ message: 'O nome da Categoria é obrigatória!' });
            }

            const categoriaExistente = await Categoria.findOne({ where: { NOME_CATEGORIA } });
            if (categoriaExistente) {
                return res.status(422).json({ message: 'A Categoria já está cadastrada!' });
            }

            const novaCategoria = await Categoria.create({ NOME_CATEGORIA });

            return res.status(201).json({ message: 'Categoria cadastrada com sucesso!'});
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao cadastrar a Categoria', error: error.message });
        }
    }

    static async EditarCategoria(req, res) {
        try {
            const { ID_CATEGORIA } = req.params;
            const { NOME_CATEGORIA } = req.body;

            if (!NOME_CATEGORIA) {
                return res.status(422).json({ message: 'O nome da Categoria é obrigatório!' });
            }

            const categoria = await Categoria.findByPk(ID_CATEGORIA);
            if (!categoria) {
                return res.status(404).json({ message: 'Categoria não encontrada' });
            }

            categoria.NOME_CATEGORIA = NOME_CATEGORIA;

            await categoria.save();

            return res.status(200).json({ message: 'Categoria atualizada com sucesso!'});
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao atualizar a Categoria', error: error.message });
        }
    }

    static async ListarCategorias(req, res) {
        try {
            const categorias = await Categoria.findAll();

            if (categorias.length === 0) {
                return res.status(404).json({ mensagem: 'Não há nenhuma categoria cadastrada' });
            }

            const categoriasFormatada = categorias.map(categoria => ({
                ID_CATEGORIA: categoria.ID_CATEGORIA,
                NOME_CATEGORIA: categoria.NOME_CATEGORIA
            }));

            return res.status(200).json({categorias: categoriasFormatada});
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao obter as categorias', error: error.message });
        }
    }

    static async ObterCategoria(req, res) {
        const { ID_CATEGORIA } = req.params;
    
        try {
            const categoria = await Categoria.findOne({ where: { ID_CATEGORIA: ID_CATEGORIA } });
    
            if (!categoria) {
                return res.status(404).json({ mensagem: 'Categoria não encontrada' });
            }
    
            const categoriaFormatada = {
                ID_CATEGORIA: categoria.ID_CATEGORIA,
                NOME_CATEGORIA: categoria.NOME_CATEGORIA,
            };
    
            res.status(200).json({ categoria: categoriaFormatada });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao obter a categoria', error: error.message });
        }
    }

    static async DeletarCategoria(req, res) {
        try {
            const { ID_CATEGORIA } = req.params;

            const categoria = await Categoria.findByPk(ID_CATEGORIA);
            if (!categoria) {
                return res.status(404).json({ message: 'Categoria não encontrada' });
            }

            await categoria.destroy();

            return res.status(200).json({ message: 'Categoria deletada com sucesso!' });
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao deletar a categoria', error: error.message });
        }
    }
};